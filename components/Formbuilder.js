import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { form2, addForm2DoubleArray } from "../utils/FormModel";
import { ChevronUpIcon } from "@heroicons/react/solid";

const FormBuilder = ({ form: form }) => {
  const inputStyle =
    "transition-all duration-300 ease-in-out my-2 w-full outline-none border border-gray-200 rounded-md py-2 px-2 focus:border-red-300 text-sm placeholder:font-light ";

  const buttonStyle =
    "md:w-auto w-full transition-all duration-300 ease-in-out py-2 rounded-md font-semibold flex justify-center items-center ";
  const [collapsed, setCollapsed] = useState([]);
  useEffect(() => {
    const values = Object.values(
      form2[1].array.map((key) => {
        return key.collapsed;
      })
    );
    setCollapsed(values);
  }, []);

  const setCollapse = (i) => {
    console.log(collapsed[i]);
    var values = collapsed;
    values[i] = !values[i];
    console.log(values);
    setCollapsed(values);
    printCollapsed();
  };
  const printCollapsed = () => {
    console.log(collapsed);
  };
  const Label = ({ row, index }) => {
    return (
      <label className="mt-3 font-semibold mr-8">
        {index + 1}. {row.title}{" "}
        {row.required ? (
          <span className="text-red-500"> *</span>
        ) : (
          <span className="text-blue-500"> *</span>
        )}
      </label>
    );
  };
  const RadioInput = ({ array: row }) => {
    return (
      <div>
        {row.selections.map((r, i) => (
          <div key={i} className="m-2">
            <input
              type={row.type}
              id={r}
              value={r}
              name={row.title}
              className="mr-1"
            />
            <label htmlFor={r}>{r}</label>
          </div>
        ))}
      </div>
    );
  };
  const TextInput = ({ array: row }) => {
    return (
      <div className="mb-4">
        <input
          className={inputStyle}
          type={row.type}
          placeholder={row.placeholder ? row.placeholder : ""}
        />
      </div>
    );
  };
  const SelectInput = ({ array: row }) => {
    return (
      <select className={inputStyle}>
        {row.selections.map((r, i) => (
          <option key={i} id={r} value={r}>
            {r}
          </option>
        ))}
      </select>
    );
  };
  const ArrayInput = ({ array: row }) => {
    return (
      <div className="mt-8 col-span-2">
        {row.array.map((r, i) => (
          <div key={i} className="lg:grid grid-cols-2">
            <label className="">
              {r.title}
              {r.required ? (
                <span className="text-red-500"> *</span>
              ) : (
                <span className="text-blue-500"> *</span>
              )}
            </label>
            {r.type === "radio" ? (
              <RadioInput array={r} />
            ) : r.type === "select" ? (
              <SelectInput array={r} />
            ) : (
              <TextInput array={r} />
            )}
          </div>
        ))}
      </div>
    );
  };
  const DoubleArrayInput = ({ array: row }) => {
    return (
      <div className="mt-8 col-span-2">
        {row.array.map((r, i) => (
          <div key={i} className="w-full border mb-8">
            <Disclosure as="div" defaultOpen>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center font-bold w-full justify-between  p-4 bg-gray-100">
                    {row.placeholder} #{i + 1}
                    <DownIcon open={open} />
                  </Disclosure.Button>
                  <Disclosure.Panel className=" transition-all duration-300 ease-in-out lg:px-4 pt-4 pb-2 text-sm text-gray-500 ">
                    {r.map((r2, i2) => (
                      <div key={i2} className=" md:grid grid-cols-2 px-8">
                        <label className="mt-4">
                          {r2.title}
                          {r2.required ? (
                            <span className="text-red-500"> *</span>
                          ) : (
                            <span className="text-blue-500"> *</span>
                          )}
                        </label>
                        {r2.type === "radio" ? (
                          <RadioInput array={r2} />
                        ) : r2.type === "select" ? (
                          <SelectInput array={r2} />
                        ) : (
                          <TextInput array={r2} />
                        )}
                      </div>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
        <div className="w-full flex justify-end">
          <div
            className={`${buttonStyle}  text-gray-500 underline underline-offset-4 hover:text-green-500  `}
            onClick={() => addForm2DoubleArray()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            Талбар нэмэх
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {form.map((row, index) => (
        <div key={index} className="lg:grid grid-cols-2 ">
          <Label index={index} row={row} />
          {row.type == "array" ? (
            <ArrayInput array={row} />
          ) : row.type === "radio" ? (
            <RadioInput array={row} />
          ) : row.type === "doublearray" ? (
            <DoubleArrayInput array={row} />
          ) : row.type === "select" ? (
            <SelectInput array={row} />
          ) : (
            <TextInput array={row} />
          )}
        </div>
      ))}
    </div>
  );
};
export default FormBuilder;

const TrashIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-5 h-5 mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  );
};

const DownIcon = ({ open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      className={`w-5 h-5 mr-4 transition-all ease-in-out duration-300 ${
        open ? "transition -rotate-180" : ""
      }`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};
