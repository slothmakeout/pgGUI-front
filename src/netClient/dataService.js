import http from "@/netClient/config";

export async function doRegister(email, phone, login, roleId, password) {
    try {
        const response = await http.post("/auth/registration", {
            email,
            phone,
            login,
            roleId,
            password,
        });
        return response.data;
    } catch (error) {
        console.error({ error });
        throw error;
    }
}

export async function doLogin(login, password) {
    try {
        const response = await http.post("/auth/login", {
            login,
            password,
        });
        // const { accessToken } = response.data;
        // localStorage.accessToken = accessToken;
        // return accessToken;
        console.warn(response);
        return response.data.roleCheck;
    } catch (error) {
        console.error({ error });
        throw error;
    }
}

// export async function doLogout() {
//   try {
//     const response = await http.post(
//       "/user/logout",
//       {},
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "x-access-token": localStorage.accessToken,
//         },
//       }
//     );
//     localStorage.removeItem("accessToken");
//     return response.data;
//   } catch (error) {
//     console.error({ error });
//     throw error;
//   }
// }

export async function fetchTasksList() {
    try {
        const response = await http.get("/tasks/getTasks", {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data?.Tasks || {};
    } catch (error) {
        console.error({ error });
        throw error;
    }
}

export async function fetchClientsList() {
    try {
        const response = await http.get("/clients/getClients", {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data?.clients || {};
    } catch (error) {
        console.error({ error });
        throw error;
    }
}

export async function fetchContactPersonsList() {
    try {
        const response = await http.get("/contactPersons/getContactPersons", {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("CP: ", response.data?.cp);
        return response.data?.cp || {};
    } catch (error) {
        console.error({ error });
        throw error;
    }
}

export async function fetchEmployeesList() {
    try {
        const response = await http.get("/employees/getEmployee", {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data?.employees || {};
    } catch (error) {
        console.error({ error });
        throw error;
    }
}

export async function searchClient(name) {
    try {
        const response = await http.post("/clients/searchClient", {
           name,
        });
        return response.data?.client || {};
    } catch (error) {
        console.error({ error });
        throw error;
    }
}

export async function completeTask(id) {
    try {
        const response = await http.post("/tasks/completeTask", {
            id,
        });
        console.warn(response);
    } catch (error) {
        console.error({ error });
        throw error;
    }
}

export async function report(id, dateStart, dateEnd) {
    try {
        const response = await http.post("/info/report", {
            id,
            dateStart,
            dateEnd,
        });
        console.warn(response);
        return response.data?.message;
    } catch (error) {
        console.error({ error });
        throw error;
    }
}

export async function updateTask(id, contactPersonName, contractId, description, createdAt, executionTime, typeId, priorityId, isDone, employeeLogin) {
  try {
      const response = await http.post("/tasks/updateTask", {
        id,
        contactPersonName,
        contractId,
        description,
        createdAt,
        executionTime,
        typeId,
        priorityId,
        isDone,
        employeeLogin
      });
      console.warn(response);
  } catch (error) {
      console.error({ error });
      throw error;
  }
}

export async function createTask(contactPersonName, contractId, description, createdAt, executionTime, typeId, priorityId, isDone, employeeLogin) {
  try {
      const response = await http.post("/tasks/createTask", {
        contactPersonName,
        contractId,
        description,
        createdAt,
        executionTime,
        typeId,
        priorityId,
        isDone,
        employeeLogin
      });
      console.warn(response);
  } catch (error) {
      console.error({ error });
      throw error;
  }
}
