import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);
import {useState} from 'react';
import { Bar } from "react-chartjs-2";

export default function Home() {
  const [input, setInput] = useState("");
  const [tag, setTag] = useState(null);
  const [list, setList] = useState([]);
  // const [Final, setFinal] = useState(0)


  const [foodSum, setFoodSum]= useState(0);
  const [entertainmentSum, setEntertainmentSum]= useState(0);
  const [lifestyleSum, setLifestyleSum]= useState(0);

  async function handleInput(e){
  try{
    e.preventDefault();
    const today=new Date();
    const year=today.getFullYear();
    const month=today.getMonth();
    const day=today.getDate();

    //user inputs are kept in array called list from where the tagged value is being filtered out
    const id = crypto.randomUUID();

    const bind={
      Id:id,
      Input:input,
      Tag:tag
    }
    //adding the current input in list as object format
    const newList = [...list, bind];
    setList(newList);
    
    const foodSumNew = newList.filter(item=> item.Tag==="Food")
    .reduce((sum,item)=> sum+ Number(item.Input),0);

    const entertainmentSumNew = newList.filter(item=> item.Tag==="Entertainment")
    .reduce((sum,item)=> sum+ Number(item.Input),0);

    const lifestyleSumNew = newList.filter(item=> item.Tag==="Lifestyle")
    .reduce((sum,item)=> sum+ Number(item.Input),0);

    setFoodSum(foodSumNew);
    setEntertainmentSum(entertainmentSumNew);
    setLifestyleSum(lifestyleSumNew);

    const post_values={
      date:`${day}/${month}/${year}`,
      food:foodSumNew,
      entertainment:entertainmentSumNew,
      lifestyle:lifestyleSumNew
    }

    const response=await fetch("http://localhost:3000",
      {
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify(post_values)
      }
      
    );
     if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    console.log("Server response:", data);

  }catch(error){
    console.log("error faced:", error);
  }
  }
  const display_chart = {
    labels: ["Food", "Lifestyle", "Entertainment"],
    datasets: [
      {
        label: "Todays Expenses",
        data: [foodSum, lifestyleSum, entertainmentSum],
        backgroundColor: "rgba(54, 162, 235, 0.6)"
      }
    ]
    };

  return (
    <div className='flex flex-row min-h-screen bg-linear-to-br from-blue-50 to-indigo-100'>
      {/* Sidebar */}
      <div className='w-1/3 bg-white shadow-lg rounded-r-3xl p-8 flex flex-col'>
        {/* Add Expense Section */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-800 mb-6'>Add Expense</h1>
          <form onSubmit={handleInput} className='space-y-6'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Amount</label>
              <input
                onChange={(e) => setInput(e.target.value)}
                value={input}
                placeholder='Enter amount'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200'
                type='number'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-3'>Category</label>
              <div className='flex flex-col space-y-2'>
                <button
                  type='button'
                  onClick={() => setTag("Food")}
                  className={`w-full text-left px-4 py-2 rounded-lg transition duration-200 border ${tag === "Food" ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 hover:bg-blue-100 border-gray-200'}`}
                >
                Food</button>
                <button
                  type='button'
                  onClick={() => setTag("Entertainment")}
                  className={`w-full text-left px-4 py-2 rounded-lg transition duration-200 border ${tag === "Entertainment" ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 hover:bg-blue-100 border-gray-200'}`}
                >
                Entertainment</button>
                <button
                  type='button'
                  onClick={() => setTag("Lifestyle")}
                  className={`w-full text-left px-4 py-2 rounded-lg transition duration-200 border ${tag === "Lifestyle" ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 hover:bg-blue-100 border-gray-200'}`}
                >
                Lifestyle</button>
              </div>
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed'
              disabled={!input || !tag}
            >
              Add Entry
            </button>
          </form>
        </div>

        {/* Entries Section */}
        <div className='flex-1'>
          <h1 className='text-2xl font-bold text-gray-800 mb-4'>Recent Entries</h1>
          <div className='bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto'>
            {list.length === 0 ? (
              <p className='text-gray-500 text-center'>No entries yet</p>
            ) : (
              <ul className='space-y-3'>
                {list.map((item) => (
                  <li key={item.Id} className='bg-white p-3 rounded-md shadow-sm border border-gray-200'>
                    <div className='flex justify-between items-center'>
                      <span className='font-medium text-gray-800'>${item.Input}</span>
                      <span className='text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full capitalize'>{item.Tag}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex-1 p-8'>
        <div className='h-full bg-white rounded-l-3xl shadow-lg flex items-center justify-center'>
          <Bar data={display_chart} />
          
      </div>
    </div>
    </div>
  );
}