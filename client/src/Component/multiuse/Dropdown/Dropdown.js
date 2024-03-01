import React from "react";
import "../../pages/home/home.css";
function Dropdown() {
  return (
    <>
      <div className="checkde block">
        <div className="check">
          <button
            id="dropdownCheckboxButton"
            data-dropdown-toggle="dropdownDefaultkbox"
            class="text-black focus:ring-4 focus:outline-non font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
            type="button"
          >
            Commercial{" "}
            <svg
              class="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdownDefaultkbox"
            class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownCheckboxButton"
            >
              <li>
                <div class="flex items-center">
                  <label
                    for="checkbox-item-1"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Default checkbox
                  </label>
                  <input
                    id="checkbox-item-1"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <label
                    for="checkbox-item-2"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Checked state
                  </label>
                  <input
                    checked
                    id="checkbox-item-2"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <label
                    for="checkbox-item-3"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Default checkbox
                  </label>
                  <input
                    id="checkbox-item-3"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
              </li>
            </ul>
          </div>

          <button
            id="dropdownCheckboxButton"
            data-dropdown-toggle="dropdownDefaultCheck"
            class="text-black focus:ring-4 focus:outline-non font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
            type="button"
          >
            Commercial{" "}
            <svg
              class="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdownDefaultCheck"
            class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownCheckboxButton"
            >
              <li>
                <div class="flex items-center">
                  <label
                    for="checkbox-item-1"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Default checkbox
                  </label>
                  <input
                    id="checkbox-item-1"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <label
                    for="checkbox-item-2"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Checked state
                  </label>
                  <input
                    checked
                    id="checkbox-item-2"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <label
                    for="checkbox-item-3"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Default checkbox
                  </label>
                  <input
                    id="checkbox-item-3"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
              </li>
            </ul>
          </div>

          <button
            id="dropdownCheckboxButton"
            data-dropdown-toggle="dropdownDefaultCheckbox"
            class="text-black focus:ring-4 focus:outline-non font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
            type="button"
          >
            Other Property Types{" "}
            <svg
              class="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdownDefaultCheckbox"
            class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownCheckboxButton"
            >
              <li>
                <div class="flex items-center">
                  <label
                    for="checkbox-item-1"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Default checkbox
                  </label>
                  <input
                    id="checkbox-item-1"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <label
                    for="checkbox-item-2"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Checked state
                  </label>
                  <input
                    checked
                    id="checkbox-item-2"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <label
                    for="checkbox-item-3"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Default checkbox
                  </label>
                  <input
                    id="checkbox-item-3"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="check flex items-center">
          <button
            id="dropdownCheckboxButton"
            data-dropdown-toggle="dropdownDefaultChecks"
            class="text-black focus:ring-4 focus:outline-non font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
            type="button"
          >
            select{" "}
            <svg
              class="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          <div
            id="dropdownDefaultChecks"
            class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              class="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownCheckboxButton"
            >
              <li>
                <div class="flex items-center">
                  <label
                    for="checkbox-item-1"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Default checkbox
                  </label>
                  <input
                    id="checkbox-item-1"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <label
                    for="checkbox-item-2"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Checked state
                  </label>
                  <input
                    checked
                    id="checkbox-item-2"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
              </li>
              <li>
                <div class="flex items-center">
                  <label
                    for="checkbox-item-3"
                    class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Default checkbox
                  </label>
                  <input
                    id="checkbox-item-3"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="drop_search">
            <input
              type="text"
              name=""
              id=""
              className="drop_search_done"
              placeholder="City Name"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
