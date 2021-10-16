
const randomCodeGen = () => {

  const emp = "EMP"
  const val = Math.floor(1000 + Math.random() * 9000);
  const code = emp + val
  return code
}

export default randomCodeGen