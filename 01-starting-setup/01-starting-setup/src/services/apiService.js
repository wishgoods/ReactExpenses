// const apiService=()=> {

   export async function getExpenses(){
    const response =  await fetch("http://localhost:5000/getAllExpenses");
    const data = await response.json();
    //this.setState({ totalReactPackages: data.total });
    
    return data.data;
  }

  export async function addExpense(expense){
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(expense),
    };
    const response = await fetch("http://localhost:5000/addNewExpense", requestOptions);
      const data = await response.json();
      return data; //this.setState({ totalReactPackages: data.total });
  }
// }
// export default apiService;
