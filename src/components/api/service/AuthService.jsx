// export const Login = async () => {
//     const request = {
//         url: ENV.BASE_URL + Endpoints.login,
//         method: 'POST',
//         body: params,
//       };
//       const response = await APIManager.makeRequest(request);
//       const user = response?.data;
//       const accessToken = user?.access_token ?? '';
//       await SharedPreference.setItem('access_token', accessToken);
//       if (user != null) {
//         await SharedPreference.setItem('user', JSON.stringify(user));
//         store.dispatch(updateUser(user));
//         const userId = user?.id;
//         await SharedPreference.setItem('user_id', JSON.stringify(userId));
//       }
//       return response.data;
//     } catch (e) {
//       Toast.showToast((e as Error).message, 'Failure');
//       throw e;
//     }
  




