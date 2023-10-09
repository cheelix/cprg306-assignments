import Link from "next/link";
 
import StudentInfo from './StudentInfo'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm  ">
        
        <h1 className="text-2xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo name="Cheelix Zhang" course="CPRG 306 D"></StudentInfo>
        <div><Link href='week2'>week2</Link></div>
        <div><Link href='week3'>week3</Link></div>
        <div><Link href='week4'>week4</Link></div>
        
    
      </div>

       
        
       
    </main>
  )
}
