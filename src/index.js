//import { elementDecisionTree } from "./js/modules/attributes_html.js";

const log = console.log.bind(console);

/* -- attributes variables -- */

document
  .querySelectorAll("input[type='checkbox'][data-cbtype='elselector']")
  .forEach((checkbox) => {
    checkbox.addEventListener("change", function (e) {
      generateList();
    });
  });

function generateList() {
  let query = Array.from(
    document.querySelectorAll(
      "input[type='checkbox'][data-cbtype='elselector']"
    )
  )
    .filter((el) => {
      return el.checked == true;
    })
    .map((el) => {
      return el.dataset.eltype;
    })
    .forEach((el) => {
      log(elementDecisionTree[el]);
    });
}

function chooseElement(e) {
  let title = `<thead class="panelTitle">
                  <th colspan="2">
                      ${e.target.dataset.eltype}
                      <input type="hidden" data-eltype="${e.target.dataset.eltype}" data-isinput="${e.target.dataset.isinput})" name="attributeValue" />
                  </th>
                </thead>
                <tbody>`;

  let elementAttributes = elementDecisionTree[e.target.dataset.eltype].join("");

  let submitButton = `<tr>
                        <td colspan="2">
                            <input
                              type="button"
                              value="Add ${e.target.dataset.eltype}"
                              id="createEl"
                              onclick="createEl();"
                            />
                            <input type="button" value="Cancel" id="cancelEl" onclick="closeAddElement()"/>
                          </td>
                      </tr>
                      </tbody>`;

  document.querySelector("#addElementBG").style.display = "block";
  document.querySelector("#addElementTable").style.display = "table";
  document.querySelector("#elements_table").style.filter = "blur(5px)";
  document.querySelector("#addElementTable").innerHTML =
    title + elementAttributes + submitButton;
}

const elementDecisionTree = {
  button: `document.querySelectorAll('input[type=checkbox]').forEach((cb) => { d[cb.name] = cb.checked; });`,
  checkbox: `cb`,
  color: `color`,
  date: `date`,
  "datetime-local": `datetime-local`,
  email: `email`,
  file: `file`,
  hidden: `hidden`,
  month: `month`,
  number: `number`,
  password: `password`,
  radio: `radio`,
  range: `range`,
  reset: `reset`,
  search: `search`,
  select: `select`,
  submit: `submit`,
  tel: `tel`,
  text: `text`,
  textarea: `textarea`,
  time: `time`,
  url: `url`,
  week: `week`,
};
