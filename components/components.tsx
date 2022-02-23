export function getToday() {
  var date = new Date();
  var year = date.getFullYear();
  var month = ("0" + (1 + date.getMonth())).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);

  return year + "-" + month + "-" + day;
}

// const onSave = (saveData: {
//   postId: number;
//   postCreatedAt: number;
//   postTitle: string;
//   postContent: string;
// }) => dispatch(postSave(saveData));

// const resetForm = () => {
//   setInputData({
//     postId: 1,
//     postCreatedAt: 1,
//     postTitle: "",
//     postContent: "",
//   });
// };

// const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setInputData({
//     ...inputData,
//     [e.target.name]: e.target.value,
//   });
// };

// const saveBtnClick = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   onSave(inputData);
//   resetForm();
// };
