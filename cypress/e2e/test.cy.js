import data from "../../submissionData.json"; // do not create this file
import "cypress-localstorage-commands";
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];

const Data = [
  {
    name: "S1",
    desc: "D1",
    type: "Indian",
    category: "Veg",
    price: 2,
  },
  {
    name: "S2",
    desc: "D3",
    type: "French",
    category: "Non-Veg",
    price: 3,
  },
  {
    name: "S3",
    desc: "D3",
    type: "Chinese",
    category: "Veg",
    price: 4,
  },
];
describe("Test", function () {
  let acc_score = 1;

  function FormSubmit(data, score, LSLen) {
    cy.get("#name").clear().type(data.name);
    cy.get("#desc").clear().type(data.desc);
    cy.get("#type").select(data.type);
    cy.get("#category").select(data.category);
    cy.get("#price").clear().type(data.price);
    cy.get("form")
      .submit()
      .should(() => {
        expect(JSON.parse(localStorage.getItem("menu")).length).to.equal(LSLen);
      })
      .then(() => {
        acc_score += score;
      });
  }

  function CheckTable(data, score, index) {
    cy.get("tr").eq(index).contains("td", data.name);
    cy.get("tr").eq(index).contains("td", data.desc);
    cy.get("tr").eq(index).contains("td", data.type);
    cy.get("tr").eq(index).contains("td", data.category);
    cy.get("tr")
      .eq(index)
      .contains("td", data.price)
      .then(() => {
        acc_score += score;
      });
  }

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      // modifyUrl(url);
      beforeEach(() => {
        cy.restoreLocalStorage();
      });

      afterEach(() => {
        cy.saveLocalStorage();
      });
      it("Form Submit is Working Fine", () => {
        cy.visit(url);
        FormSubmit(Data[0], 2, 1);
      }); // Score:- 2
      it("Check the Data after mutiple form submits", () => {
        FormSubmit(Data[1], 0.5, 2);
        FormSubmit(Data[2], 0.5, 3);
      }); // Score:- 1
      it("Check the Dashboard page's Table", () => {
        cy.visit(url + "/dashboard.html");
        CheckTable(Data[0], 0, 1);
        CheckTable(Data[1], 0, 2);
        CheckTable(Data[2], 0, 3);
        cy.then(() => {
          acc_score += 3;
        });
      }); // Score:- 3
      it("Check Filtering in Done", () => {
        cy.get("select").select("Indian");
        CheckTable(Data[0], 0, 1);
        cy.get("select").select("French");
        CheckTable(Data[1], 0, 1);
        cy.get("select").select("");
        cy.get("tr").should("have.length", 4);
        cy.then(() => {
          acc_score += 2;
        });
        cy.reload();
      }); // Score:-2

      it(`Add To Favourite`, () => {
        expect(localStorage.getItem("fav-menu")).eq(null);

        cy.get("tbody>tr")
          .eq(0)
          .contains("Add")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("fav-menu")).length).eq(1);
          });
        cy.get("tbody>tr")
          .eq(1)
          .contains("Add")
          .click()
          .then(() => {
            expect(JSON.parse(localStorage.getItem("fav-menu")).length).eq(2);
          });

        cy.then(() => {
          acc_score += 2;
        });
      }); // Score:- 2

      it(`Check Favourite pages table`, () => {
        cy.visit(`${url}favourites.html`);
        CheckTable(Data[0], 0, 1);
        CheckTable(Data[1], 0, 2);
        cy.then(() => {
          acc_score += 2;
        });
      }); // Score:- 2

      it(`Check the delete`, () => {
        cy.get("tbody tr").eq(0).contains("Delete").click();
        CheckTable(Data[1], 0, 1);
        cy.then(() => {
          acc_score += 2;
        });
      }); // Score:- 2
    }

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
