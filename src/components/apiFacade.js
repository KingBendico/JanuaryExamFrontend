import jwt_decode from "jwt-decode";
import { Site, AddCourseUrl, AddUserURL, EditCourseURL} from "./../sites"


const URL = Site;

function handleHttpErrors(res) {
    if (!res.ok) {
        alert("Forkert brugernavn eller password!");
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}
const getRoles = () => {
    if (getToken()) {
        const decode = jwt_decode(getToken());
        return decode.roles
    }
}

const getUserName = () => {
    if (getToken()) {
        const decode = jwt_decode(getToken());
        return decode.username
    }

};

const setToken = (token) => {
    localStorage.setItem('jwtToken', token)
}

const getToken = () => {
    return localStorage.getItem('jwtToken')
}
const loggedIn = () => {
    const loggedIn = getToken() != null;
    console.log(loggedIn)
    return loggedIn;
}

const logout = () => {
    localStorage.removeItem("jwtToken");
}

function ApiFacade() {

    const login = (user, password) => {
        const options = makeOptions("POST", true, { username: user, password: password });
        return fetch(URL + "/login", options)
            .then(handleHttpErrors)
            .then(res => {
                setToken(res.token)


            })
    }


    const fetchData = () => {
        const options = makeOptions("GET", true); //True add's the token
        return fetch(URL + "/"+ getRoles() + "/" + getRoles(), options).then(handleHttpErrors);
    }
    const makeOptions = (method, addToken, body) => {
        var opts = {
            method: method,
            headers: {
                "Content-type": "application/json",
                'Accept': 'application/json',
            }
        }
        if (addToken && loggedIn()) {
            opts.headers["x-access-token"] = getToken();
        }

        if (body) {
            opts.body = JSON.stringify(body);
        }
        return opts;
    }

    const addCourse = (courseName, description) => {

        const options = makeOptions("POST", true, { courseName: courseName, description: description})
        return fetch(AddCourseUrl, options);
    }

    const editCourse = (courseName, description) => {

        const options = makeOptions("put", true, { courseName: courseName, description: description,
              })
        return fetch(EditCourseURL, options);
    }
    const addUser = (user, password) => {

        const options = makeOptions("POST", true, { fname: user, password: password })
        return fetch(AddUserURL, options);
    }
   
    return {
        makeOptions,
        setToken,
        getToken,
        loggedIn,
        login,
        logout,
        fetchData,
        getUserName,
        getRoles,
        addCourse,
        addUser,
        editCourse
    }
}
const facade = ApiFacade();




export default facade;