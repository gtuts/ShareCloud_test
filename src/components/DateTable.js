import React from "react";

export default function DateTable() {
  return (
    <div class="pt-3">
      <div class="row ms-1">
        <div class="accordion-item border-0 col-2 col-sm-1 p-0 m-0">
          <button
            type="button"
            class="btn btn-secondary"
            id="headingOne"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            1
          </button>
        </div>
        <div class="accordion-item border-0 col-2 col-sm-1 p-0 m-0">
          <button
            type="button"
            class="btn btn-secondary"
            id="headingTwo"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            2
          </button>
        </div>
        <div class="accordion-item border-0 col-2 col-sm-1 p-0 m-0">
          <button
            type="button"
            class="btn btn-secondary"
            id="headingThree"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            3
          </button>
        </div>
        <div class="accordion-item border-0 col-2 col-sm-1 p-0 m-0">
          <button
            type="button"
            class="btn btn-secondary"
            id="headingFour"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            4
          </button>
        </div>
      </div>
      <div class="accordion" id="accordionExample">
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Jan</th>
                  <th scope="col">Feb</th>
                  <th scope="col">Mar</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr class="p-0 m-0">
                  <td colspan="4" class="p-0">
                    <table class="table table-hover table-bordered mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Tasks</th>
                          <th scope="col">1</th>
                          <th scope="col">2</th>
                          <th scope="col">3</th>
                          <th scope="col">4</th>
                          <th scope="col">5</th>
                          <th scope="col">6</th>
                          <th scope="col">7</th>
                          <th scope="col">8</th>
                          <th scope="col">9</th>
                          <th scope="col">10</th>
                          <th scope="col">11</th>
                          <th scope="col">12</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="col">1</th>
                          <td class="bg-success"></td>
                          <td class="bg-success"></td>
                          <td class="bg-success"></td>
                          <td class="bg-success"></td>
                          <td class="bg-success"></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <th scope="col">2</th>
                          <td></td>
                          <td></td>
                          <td class="bg-success"></td>
                          <td class="bg-success"></td>
                          <td class="bg-success"></td>
                          <td class="bg-success"></td>
                          <td class="bg-success"></td>
                          <td class="bg-success"></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Apr</th>
                  <th scope="col">May</th>
                  <th scope="col">Jun</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr class="p-0 m-0">
                  <td colspan="4" class="p-0">
                    <table class="table table-hover table-bordered mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Tasks</th>
                          <th scope="col">1</th>
                          <th scope="col">2</th>
                          <th scope="col">3</th>
                          <th scope="col">4</th>
                          <th scope="col">5</th>
                          <th scope="col">6</th>
                          <th scope="col">7</th>
                          <th scope="col">8</th>
                          <th scope="col">9</th>
                          <th scope="col">10</th>
                          <th scope="col">11</th>
                          <th scope="col">12</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="col">1</th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <th scope="col">2</th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Jul</th>
                  <th scope="col">Aug</th>
                  <th scope="col">Sep</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr class="p-0 m-0">
                  <td colspan="4" class="p-0">
                    <table class="table table-hover table-bordered mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Tasks</th>
                          <th scope="col">1</th>
                          <th scope="col">2</th>
                          <th scope="col">3</th>
                          <th scope="col">4</th>
                          <th scope="col">5</th>
                          <th scope="col">6</th>
                          <th scope="col">7</th>
                          <th scope="col">8</th>
                          <th scope="col">9</th>
                          <th scope="col">10</th>
                          <th scope="col">11</th>
                          <th scope="col">12</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="col">1</th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <th scope="col">2</th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          id="collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Oct</th>
                  <th scope="col">Nov</th>
                  <th scope="col">Det</th>
                </tr>
              </thead>
              <tbody class="table-group-divider">
                <tr class="p-0 m-0">
                  <td colspan="4" class="p-0">
                    <table class="table table-hover table-bordered mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Tasks</th>
                          <th scope="col">1</th>
                          <th scope="col">2</th>
                          <th scope="col">3</th>
                          <th scope="col">4</th>
                          <th scope="col">5</th>
                          <th scope="col">6</th>
                          <th scope="col">7</th>
                          <th scope="col">8</th>
                          <th scope="col">9</th>
                          <th scope="col">10</th>
                          <th scope="col">11</th>
                          <th scope="col">12</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="col">1</th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <th scope="col">2</th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
