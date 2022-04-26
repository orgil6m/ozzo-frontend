const educationModel = [
    {
        "at": {
            type : String,
            required : false,
        },
        "name": {
            type : String,
            required : false,
        },
        "years": {
            type : String,
            required : false,
        },
    },
    {
        "at": {
            type : String,
            required : false,
        },
        "name": {
            type : String,
            required : false,
        },
        "years": {
            type : String,
            required : false,
        },
    },
    {
        "at": {
            type : String,
            required : false,
        },
        "name": {
            type : String,
            required : false,
        },
        "years": {
            type : String,
            required : false,
        },
    },
]

const skillsModel = [
    {
        type : String,
        required : false,
    },
    {
        type : String,
        required : false,
    }, 
    {
        type : String,
        required : false,
    },
]

const experienceModel = [
     {
        "at": {
            type : String,
            required : false,
        },
        "name": {
            type : String,
            required : false,
        },
        "years": {
            type : String,
            required : false,
        },
    },
    {
        "at": {
            type : String,
            required : false,
        },
        "name": {
            type : String,
            required : false,
        },
        "years": {
            type : String,
            required : false,
        },
    },
    {
        "at": {
            type : String,
            required : false,
        },
        "name": {
            type : String,
            required : false,
        },
        "years": {
            type : String,
            required : false,
        },
    },
]

const rolesModel = [
     {
        type : String,
        required : false,
    },
    {
        type : String,
        required : false,
    }, 
    {
        type : String,
        required : false,
    },
]

const UserModel = [
    {
        "firstname": {
            type : String,
            required : true,
        },
        "lastname": {
            type : String,
            required :true,
        },
        "username": {
            type : String,
            required :true,
        },
        "password": {
            type : String,
            required :true,
        },
        "phone": {
            type : String,
            required : false,
        },
        "title": {
            type : String,
            required : true,
        },

        "email":{
            type : String,
            required : false,
        },
        "linkedin": {
            type : String,
            required : false,
        },
        "facebook": {
            type : String,
            required : false,
        },
        "instagram": {
            type : String,
            required : false,
        },
        "youtube": {
            type : String,
            required : false,
        },
        "website": {
            type : String,
            required : false,
        },

        "profilephoto": {
            type : String,
            required : false,
        },

        "education": {
            "title": "Боловсрол",
            "schools": [educationModel]
        },
        "experience": {
            "title": "Ажлын туршлага",
            "works": [experienceModel]
        },
        "skills": {
            "title": "Чадварууд",
            "skill": [skillsModel]
        },
        "roles": [rolesModel],

        "artistphoto": {
            type : String,
            required : false,
        },
        "artistname": {
            type : String,
            required : false,
        },
        "bio": {
            "title": "Био",
            "text": {
                type : String,
                required : false,
            },
        },

        "priority" : {
            type : Number,
            required : false,
        }
    }
]
