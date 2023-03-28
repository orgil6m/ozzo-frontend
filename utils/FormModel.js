export const form1 = [
  {
    title: "Ургийн овог",
    type: "text",
    placeholder: "Ургийн овгоо оруулна уу",
    required: true,
  },
  {
    title: "Эцэг/Эхийн нэр",
    type: "text",
    placeholder: "Эцэг/Эхийн нэрээ оруулна уу",
    required: true,
  },
  {
    title: "Өөрийн нэр",
    type: "text",
    placeholder: "Өөрийн нэрээ оруулна уу",
    required: true,
  },
  {
    title: "Хүйс",
    type: "radio",
    selections: ["Эрэгтэй", "Эмэгтэй", "Бусад"],
    required: true,
  },
  {
    title: "Төрсөн огноо",
    type: "date",
    placeholder: "MM/DD/YYYY",
    required: true,
  },
  {
    title: "Регистерийн дугаар",
    type: "text",
    placeholder: "Регистерийн дугаараа оруулна уу",
    required: true,
  },
  {
    title: "Оршин суугаа хаяг",
    type: "array",
    required: true,
    array: [
      {
        title: "Хот, аймаг",
        type: "text",
        placeholder: "Хот, аймгаа оруулна уу",
        required: true,
      },
      {
        title: "Сум, дүүрэг ",
        type: "text",
        placeholder: "Сум, дүүргээ оруулна уу",
        required: true,
      },
      {
        title: "Баг, хороо",
        type: "text",
        placeholder: "Баг, хороогоо оруулна уу",
        required: true,
      },
      {
        title: "Хороолол, гудамж",
        type: "text",
        placeholder: "Хороолол, гудамжаа оруулна уу",
        required: true,
      },
      {
        title: "Байр, хашаа",
        type: "text",
        placeholder: "Байр, хашаагаа оруулна уу",
        required: true,
      },
      {
        title: "Тоот",
        type: "text",
        placeholder: "Тоотоо оруулна уу",
        required: true,
      },
    ],
  },
  {
    title: "Утасны дугаар",
    type: "text",
    placeholder: "Утасны дугаараа оруулна уу",
    required: true,
  },
  {
    title: "И-мейл",
    type: "text",
    placeholder: "И-мейлээ хаягаа оруулна уу",
    required: false,
  },
  {
    title: "Facebook хаяг",
    type: "text",
    placeholder: "Facebook хаягаа оруулна уу",
    required: false,
  },
  {
    title: "Instagram хаяг",
    type: "text",
    placeholder: "Instagram хаягаа оруулна уу",
    required: false,
  },
  {
    title: "YouTube хаяг",
    type: "text",
    placeholder: "YouTube хаягаа оруулна уу",
    required: false,
  },
];
export const form2 = [
  {
    title: "Ерөнхий боловсрол",
    type: "array",
    array: [
      {
        title: "Улс",
        placeholder: "Төгссөн улсаа оруулна уу",
        type: "text",
        required: true,
      },
      {
        title: "Хот, Аймаг",
        placeholder: "Хаана төгссөнөө оруулна уу",
        type: "text",
        required: true,
      },
      {
        title: "Сургуулийн нэр",
        placeholder: "Сургуулийн нэрээ оруулна уу",
        type: "text",
        required: true,
      },
      {
        title: "Төгссөн он",
        placeholder: "Төгссөн оноо оруулна уу",
        type: "text",
        required: true,
      },
      {
        title: "Боловсролын түвшин",
        placeholder: "Төгссөн оноо оруулна уу",
        type: "radio",
        selections: ["Бага", "Бүрэн бус дунд", "Бүрэн дунд"],
        required: true,
      },
      {
        title: "Дүнгийн голч",
        placeholder: "Дүнгийн голчоо оруулна уу",
        type: "number",
        required: true,
      },
    ],

    required: true,
  },
  {
    title: "Дээд, тусгай мэргэжлийн боловсрол",
    placeholder: "Сургууль",
    type: "doublearray",
    require: true,
    array: [
      [
        {
          title: "Улс",
          placeholder: "Төгссөн улсаа оруулна уу",
          type: "text",
          required: true,
        },
        {
          title: "Хот, Аймаг",
          placeholder: "Хаана төгссөнөө оруулна уу",
          type: "text",
          required: true,
        },
        {
          title: "Сургуулийн нэр",
          placeholder: "Сургуулийн нэрээ оруулна уу",
          type: "text",
          required: true,
        },
        {
          title: "Элссэн он",
          placeholder: "Элссэн оноо оруулна уу",
          type: "text",
          required: true,
        },
        {
          title: "Төгссөн он",
          placeholder: "Төгссөн оноо оруулна уу",
          type: "text",
          required: true,
        },
        {
          title: "Эзэмшсэн мэргэжил",
          placeholder: "Эзэмшсэн мэргэжлээ оруулна уу",
          type: "text",
          required: true,
        },
        {
          title: "Боловсролын төрөл",
          placeholder: "Боловсролын төрлөө оруулна уу",
          type: "select",
          selections: ["Сонгоно уу", "Мэргэжлийн", "Дунд"],
          required: true,
        },
        {
          title: "Боловсролын түвшин",
          placeholder: "Боловсролын түвшнээ оруулна уу",
          type: "select",
          selections: [
            "Сонгоно уу",
            "Тусгай дунд",
            "Мэргэжлийн",
            "Бакалавр",
            "Магистр",
            "Доктор",
            "Профессор",
          ],
          required: true,
        },
        {
          title: "Дүнгийн голч",
          placeholder: "Дүнгийн голчоо оруулна уу",
          type: "number",
          required: true,
        },
      ],
    ],
  },
];

export const addForm2DoubleArray = () => {
  console.log(form2[1].array);
};
