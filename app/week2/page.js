import StudentInfo from '../StudentInfo'


export default function week2(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm  '>
            <h1>My shopping list...</h1>
            <StudentInfo/>
            </div>
        </main>
    )
}