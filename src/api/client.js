import apiClient from "./client";

export const register = async (values) => {
  const userData = {
    firstName: values?.firstName,
    lastName: values?.lastName,
    email: values?.email,
    portalLoginID: values?.loginId,
    portalPassword: values?.password,
  };
  try {
    const { data } = await apiClient.post("post-user", userData);
    return { isSuccess: true };
  } catch (error) {
    console.error(error);
    return { isSuccess: false };
  }
};

export const login = async (values) => {
  try {
    const { data } = await apiClient.post(
      "post-user-login",
      {},
      {
        headers: {
          userid: values?.email,
          password: values?.password,
        },
      }
    );
    const userDetails = data.data[0];
    localStorage.setItem("user", JSON.stringify(userDetails));
    return { isSuccess: true, message: null };
  } catch (error) {
    console.error(error);
    return {
      isSuccess: false,
      message: error?.response?.data?.message || null,
    };
  }
};
