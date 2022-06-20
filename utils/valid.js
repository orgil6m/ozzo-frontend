import { useRouter } from "next/router";

export const validMessageFields = (username, email, message) => {
    if(!username || !email || !message)
    return "Та талбаруудыг бүрэн бөглөнө үү!";
    if(!validateEmail(email))
        return "И-мэйл хаяг буруу!"
}

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}