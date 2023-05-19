import axios from "axios";
import { DefaultApi, CreateProblem202Response, GetProblem200Response } from "../../api/api";
import { apiErrorHandler } from "./errorhandler";

const instance = axios.create();
const baseURL = "http://15.165.21.53:3000";
const headers = { "Content-Type": `application/json` };

type postProblemReturn = {
    functions: string[];
    requirements: string[];
    statement: string;
    test_cases: string[];
};

/**
 * @param {Languages} language
 * @param {number}difficulty
 * @returns {postProblemReturn}
 */
const postProblem = async (language: Languages, difficulty: number) => {
    try {
        const res = await instance.post("/problems", { language, difficulty }, { headers });
        const data = res.data as postProblemReturn;
        console.log("🚀 ~ file: problem.ts:12 ~ res:", data);

        return data;
    } catch (err) {
        apiErrorHandler(err);
    }
};

// type getProblemReturnType = {
//     id: string;
//     language: Languages;
//     content: string;
// };

// export const getProblem = async (problem_id: string) => {
//     try {
//         const res = await instance.get(`/problems/${problem_id}`, { headers });
//         const data = res.data as postProblemReturn;
//         console.log(data);
//         // content : base64
//         // id
//         // language
//         return data;
//     } catch (err) {
//         apiErrorHandler(err);
//     }
// };
const generateProblem = () => {
    const api = new DefaultApi(undefined, baseURL, instance);
    const create = async (language: string, difficulty: number): CreateProblem202Response => {
        const getCreate = await api.createProblem({
            language,
            difficulty,
        });
        return getCreate.data;
    };

    const get = async (requestId: string): GetProblem200Response => {
        const problem = await api.getProblem(requestId);
        // const res = await instance.get(`/problems/${requestId}`, { headers });
        const data = problem.data.problem as GetProblem200Response;
        // console.log(data);
        return data;
    };
    return {
        create,
        get,
    };
};

// 이거..
const wrapPromise = (promise) => {
    let status = "pending";
    let result;
    const suspender = promise.then(
      (r) => {
        status = "success";
        result = r;
      }, 
      (e) => {
        status = "error";
        result = e;
      })
    );

    return {
        read() {
            console.log(status);
            if (status === "pending") {
                console.log(suspender);
                throw suspender;
            }
            if (status === "success") {
                return result;
            }
            if (status === "error") {
                throw result;
            }
        },
    };
};

export { generateProblem, postProblem };
