import Link from "next/link";



export default function StudentInfo({name,course}) {
    return (
        <main>
        <div >
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm  ">
           
           
            <div> Name:  { name}</div>
            <div>Course section:{course}</div>
            <Link href="https://github.com/cheelix/cprg306-assignments"> github repository</Link>
            
           
            </div>
             
        </div>
        </main> 
  
         
  
       
    )
  }
  