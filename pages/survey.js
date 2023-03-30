import Image from "next/image";
import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import cover from "../Assets/cover.jpg";
import CoverPhoto from "../components/CoverPhoto";
import daavkatunes from "../Assets/daavkatunes.svg";
import { sendFeedBack } from "../Datas/feedbacks";
import Loading from "../components/Loading";
import { DataContext } from "../store/GlobalState";

const Survey = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useContext(DataContext);

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await sendFeedBack(data);
    if (response.status === 200) {
      dispatch({
        type: "NOTIFY",
        payload: { success: "Амжилттай илгээгдлээ!" },
      });
      reset();
    } else {
      dispatch({
        type: "NOTIFY",
        payload: { error: "Алдаа гарлаа!" },
      });
    }
    setLoading(false);
  };
  const inputStyle =
    "transition-all duration-300 ease-in-out my-2 w-full outline-none bg-white border  rounded-md p-2 focus:border-blue-500 placeholder:font-light error:border-red-500";

  return (
    <div className="w-full flex flex-col ">
      {loading ? <Loading /> : <></>}
      <div className="relative bg-gradient-to-r from-red-500 to-red-600 flex flex-col justify-center items-center p-12 mt-20">
        <div className="absolute w-full h-full opacity-10 bg-[url('../Assets/pattern.svg')] "></div>
        <Image
          width={150}
          height={150}
          className="md:scale-100 scale-[80%]"
          src={daavkatunes}
          alt=""
        />
        <span className="uppercase text-white font-bold md:mt-6 mt-2 text-lg">
          DGL хөгжмийн академи
        </span>
      </div>
      <div className="w-full flex justify-center items-center flex-col md:p-20 p-5 mt-4">
        <span className="font-bold text-2xl uppercase text-center flex flex-col items-center mb-8 text-gray-800">
          Суралцагчийн сэтгэл ханамжийн судалгаа
          <div className="w-20 h-1 bg-red-500 mt-2"></div>
        </span>
        <div className="md:w-1/2 mb-12 flex flex-col">
          <span className="border-l-4 border-blue-500 pl-4 bg-blue-500/10 py-2 pr-4 rounded">
            <span className="font-bold capitalize">DGL хөгжмийн академи</span>{" "}
            нь суралцагч нэг бүрийнхээ сэтгэл ханамжид нийцсэн, чанартай
            үйлчилгээ, чанартай хөгжмийн боловсролыг олгох үүднээс энэхүү
            судалгааг авч байна.
          </span>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:w-1/2 gap-10 "
        >
          {surveyTexts.map((row, index) => (
            <div key={index} className="flex flex-col">
              <label htmlFor={row.label} className="font-medium">
                {index + 1}. {row.label}
                <span className="text-red-500">*</span>
              </label>
              {row.placeholder ? (
                <div className="flex flex-col">
                  <input
                    {...register(row.value, { required: true })}
                    aria-invalid={errors[row.label] ? "true" : "false"}
                    placeholder={row.placeholder}
                    className={inputStyle}
                  />
                </div>
              ) : row.options ? (
                <select
                  {...register(row.value, { required: true })}
                  className={inputStyle}
                >
                  {row.options.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              ) : row.radio ? (
                <div className="flex my-4 flex-col w-full">
                  {row.radio.map((r, i) => (
                    <label
                      key={i}
                      htmlFor={row.label + r}
                      className="w-full flex items-center gap-2 mr-8 p-2 border border-gray-200 my-1 rounded-md cursor-pointer"
                    >
                      <input
                        {...register(row.value, { required: true })}
                        type="radio"
                        value={r}
                        className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 "
                        id={row.label + r}
                      />
                      {r}
                    </label>
                  ))}
                  <label className="italic mt-4 text-blue-500">
                    Сайжруулах хэрэгтэй бол юуг нь сайжруулах вэ?
                  </label>
                  <textarea
                    {...register(row.value2)}
                    placeholder="Энд бичнэ үү..."
                    className={inputStyle}
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
          <div className="flex justify-end">
            <button
              type="submit"
              className="transition-all duration-300 ease-in-out bg-red-500 text-white py-2 px-12 rounded-md font-bold hover:shadow-xl hover:shadow-red-500/20"
            >
              Илгээх
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Survey;

export const surveyTexts = [
  {
    value: "type",
    label:
      "Та DGL хөгжмийн академид ямар төрлөөр(хөгжмөөр) суралцаж байгаа вэ?",
    options: [
      "Гитар",
      "Төгөлдөр хуур",
      "Үкүлэлэ",
      "Морин хуур",
      "Саксафон",
      "Ятга",
      "Хийл",
      "Бөмбөр",
      "Дуулаач",
      "Хөөмий",
    ],
  },
  {
    value: "duration",
    label: `Та DGL хөгжмийн академид хэд дэх сардаа суралцаж байна вэ?`,
    options: [
      "Эхний сардаа",
      "2 дахь сардаа",
      "3 дахь сардаа",
      "3-6 дахь сардаа",
      "6-9 дахь сардаа",
      "9-12 дахь сардаа",
      "1 жилээс дээш",
    ],
  },
  {
    value: "branch",
    label: "Та DGL хөгжмийн академиийн аль салбарт суралцаж байгаа вэ?",
    options: [
      "Тэнгис салбар, ЧД",
      "Бөхийн өргөө салбар, БЗД",
      "Саппоро салбар, СХД",
      "Морьтон салбар, ХУД",
      "Хороолол салбар, БГД",
    ],
  },
  {
    value: "environment",
    label: "Та манай сургалтын орчин нөхцөлийг үнэлнэ үү? (0-10 оноо)",
    radio: [
      "10. Маш цэвэр, тухтай орчинтой",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
      "1",
      "0. Маш бохир, тухгүй орчинтой",
    ],
    value2: "environment-feedback",
  },
  {
    value: "curriculum",
    label: "Та манай сургалтын хөтөлбөрийг үнэлнэ үү?  (0-10 оноо)",
    radio: [
      "10. Маш ойлгомжтой, сайн боловсруулагдсан",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
      "1",
      "0. Маш ойлгомжгүй, муу боловсруулагдсан",
    ],
    value2: "curriculum-feedback",
  },
  {
    value: "teacher",
    label:
      "Та манай багшийн харилцаа хандлага, заах арга барилыг үнэлнэ үү? (0-10 оноо)",
    radio: [
      "10. Маш эерэг хандлагатай, заах арга барил сайн",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
      "1",
      "0. Маш сөрөг хандлагатай, заах арга барил муу",
    ],
    value2: "teacher-feedback",
  },
  {
    value: "name",
    label: "Таны нэр?",
    placeholder: "Энд нэрээ бичнэ үү",
  },
  {
    value: "age",
    label: "Таны нас?",
    placeholder: "Энд насаа бичнэ үү",
  },
  {
    value: "number",
    label: "Тантай холбогдох утасны дугаар хэд вэ?",
    placeholder: "Утасны дугаараа бичнэ үү",
  },
];
