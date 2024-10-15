import axios from "axios";
class Client {
  fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      sessionStorage.setItem("error", JSON.stringify(error));
    }
  };

  postData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      sessionStorage.setItem("error", JSON.stringify(error));
    }
  };

  async postFormData(url, data, headers) {
    try {
      const response = await axios.post(url, data, headers);
      return response.data;
    } catch (error) {
      console.log(error.response.data.status);
      const e = error.response.data.status;
      throw new Error(e);
    }
  }
}

export { Client };
