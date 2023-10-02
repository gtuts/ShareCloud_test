import React from "react";

export default function DateTable() {
  return (
    <div class="pt-3">
      <button type="button" class="btn btn-secondary mx-1">
        Tagasi
      </button>
      <button type="button" class="btn btn-secondary">
        Edasi
      </button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Jan</th>
            <th scope="col">Veb</th>
            <th scope="col">Mar</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr class="p-0 m-0">
            <td colspan="4" class="p-0">
              <table class="table table-hover table-bordered mb-0">
                <thead>
                  <tr>
                    <th scope="col">Task</th>
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
                    <th scope="col">1</th>
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
                    <td class="bg-success"></td>
                    <td class="bg-success"></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
