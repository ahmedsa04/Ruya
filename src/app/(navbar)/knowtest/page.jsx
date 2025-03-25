'use client'
import Know from '../../../../public/icons/Frame 13.svg'
import unchecked from '../../../../public/icons/radio_button_unchecked.svg'
import checked from '../../../../public/icons/radio_button_checked.svg'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Arrwo from '../../../../public/icons/Arrow up.svg'
import Link from 'next/link'


function page() {
    const [showResult, setShowResult] = useState(false)
    const [showResultData, setShowResultData] = useState([])
    const [Data, setData] = useState([])

    function getData(Answer) {

        const res = fetch(`http://lcokgog8osc8wco84sso08wc.194.163.168.91.sslip.io/api/Recommendation/Recommend`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Answer)
        })
            .then(res => res.json())
            .then(data => {
                var list = []
                for (let i = 0; i < 3; i++) {
                    fetch(`http://lcokgog8osc8wco84sso08wc.194.163.168.91.sslip.io/api/Home/Search?search=${data.recommendations[i].departmentName}`)
                        .then(res => res.json())
                        .then(data => setShowResultData(showResultData.push(data[0])))
                }
            }

            )
    }
    const [Answer, setAnswer] = useState({
        AnalyticalThinking: 0,
        Creativity: 0,
        Innovation: 0,
        ProblemSolving: 0,
        Teamwork: 0,
        ContinuousLearning: 0,
    })
    function handleSubmit(e, Answer) {
        e.preventDefault()
        getData(Answer)
        setData(showResultData)
    }

    const [Focused, setFocused] = useState({
        q1: null,
        q2: null,
        q3: null,
        q4: null,
        q5: null,
        q6: null,
    })
    const AnsValues = [1, 3, 5, 7, 9]
    if (Data.length > 0) {
        console.log(Data)
        return (
            <div className={`${Data ? " bg-neutral-300 " : ""} scroll-smooth `}>
                {Data ? <div className=' w-full h-full opacity-100 fixed flex justify-center pt-32'>
                    <div className=' relative w-fit h-fit z-20 bg-whiteBG border-gray border p-16 rounded-3xl'>
                        <h1 className=' font-noto font-bold text-gray text-center text-2xl'>Best Three Majors</h1>
                        <h1 className=' text-center font-noto font-medium text-neutral-400 text-xl mt-2'>Based on your personality</h1>
                        <div className=' w-full h-fit px-1 py-2'>
                            {Data.map((result) => (
                                <Link key={result.id} href={`/college/ID?id=${result.id}`}>
                                    <div className=' w-full h-fit mt-8 flex'>
                                        <img width={0} height={0} className=' object-cover w-32 h-32 rounded-2xl' src={result.imageUrl} alt='' />
                                        <div className=' mx-4 my-auto'>
                                            <h1 className=' text-dark font-noto text-xl text-start font-bold'>{result.title}</h1>
                                            <h1 className=' text-gray font-noto text-md text-start font-medium'>{result.source}</h1>
                                            <div className="  flex"><h1 className=" text-ruya font-noto underline font-medium text-[18px]">Know More</h1><Image className=" w-5 h-5 ml-2 mt-1" alt="" src={Arrwo} /></div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <Link href='/'>
                            <div className=' flex justify-center w-full h-fit pt-8'>
                                <button className=' focus:outline-none w-fit px-6 h-12 bg-transparent text-lightGray bg-neutral-200 font-noto font-semibold text-lg rounded-[40px] mx-auto'>Continue Browsing</button>
                            </div>
                        </Link>
                    </div>
                </div> : <></>}

                <div className={`${showResult ? " pointer-events-none bg-neutral-300 " : ""} w-full h-fit`}>
                    <Image src={Know} alt="" className=' object-cover w-full h-full' />
                </div>
                <div className={`${showResult ? " pointer-events-none bg-neutral-300 " : ""} w-10/12 h-fit mx-auto py-10`}>
                    <h1 className=' text-3xl text-ruya font-noto font-bold'>تفاصيل الاختبار</h1>
                    <p className=' mt-2 text-[23px] text-gray font-noto font-regular'>أجب عن مجموعة بسيطة من الأسئلة بحذر مع وضع الهدف في الاعتبار للتأمل في سلوكياتك واتجاهاتك التي تؤثر على الاختيارات التي تتخذها عند حضور موضوع مهم للغاية مثل اختيار ما ستفعله معظم حياتك لمعرفة أفضل تخصص للدراسة، اختر لكل سؤال من اليسار إلى اليمين، من الأقل إلى الأكثر اتفاقًا</p>
                    <hr className=' w-[90%] h-[2px] bg-gray mx-auto mt-10' />
                </div>
                <div className={` ${showResult ? " pointer-events-none bg-neutral-300 " : ""} w-[60%] h-full mx-auto`}>

                    <div className=' w-full h-fit mb-48'>
                        <h1 className='text-2xl text-center text-gray font-noto font-semibold'>هل تعتبر نفسك شخصًا منطقيًا يحب التفكير التحليلي وحل المشكلات المعقدة؟</h1>
                        <div className=' mt-8 mx-auto w-6/12 h-[80px] border-[0.5px] border-dark rounded-[40px] flex justify-around'><h1 className=' text-gray text-xl font-semibold font-noto my-auto'>Disagree</h1>{AnsValues.map((val) => (Focused.q1 == val ? <Image key={"a" + val} alt='' draggable={false} className=' hover:cursor-pointer w-[50px] h-[50px] my-auto ' src={checked} /> : <Image key={"a" + val} alt='' draggable={false} className=' hover:cursor-pointer w-[50px] h-[50px] my-auto ' onClick={() => { setFocused({ ...Focused, q1: val }); setAnswer({ ...Answer, AnalyticalThinking: val }) }} src={unchecked} />))}<h1 className=' text-gray text-xl font-semibold font-noto my-auto'>Agree</h1></div>
                    </div>
                    <div className=' w-full h-fit mb-48'>
                        <h1 className='text-2xl text-center text-gray font-noto font-semibold'>هل تستمتع بالعمل مع الفريق؟</h1>
                        <div className=' mt-8 mx-auto w-6/12 h-[80px] border-[0.5px] border-dark rounded-[40px] flex justify-around'><h1 className=' text-gray text-xl font-semibold font-noto my-auto'>Disagree</h1>{AnsValues.map((val) => (Focused.q2 == val ? <Image key={"b" + val} alt='' draggable={false} className=' hover:cursor-pointer w-[50px] h-[50px] my-auto ' src={checked} /> : <Image key={"b" + val} alt='' draggable={false} className=' hover:cursor-pointer w-[50px] h-[50px] my-auto ' onClick={() => { setFocused({ ...Focused, q2: val }); setAnswer({ ...Answer, Creativity: val }) }} src={unchecked} />))}<h1 className=' text-gray text-xl font-semibold font-noto my-auto'>Agree</h1></div>
                    </div>

                    <div className=' w-full h-fit mb-48'>
                        <h1 className='text-2xl text-center text-gray font-noto font-semibold'>هل تستطيع العمل في بيئة تركز على الدقة والانضباط؟</h1>
                        <div className=' mt-8 mx-auto w-6/12 h-[80px] border-[0.5px] border-dark rounded-[40px] flex justify-around'><h1 className=' text-gray text-xl font-semibold font-noto my-auto'>Disagree</h1>{AnsValues.map((val) => (Focused.q3 == val ? <Image key={"b" + val} alt='' draggable={false} className=' hover:cursor-pointer w-[50px] h-[50px] my-auto ' src={checked} /> : <Image key={"c" + val} alt='' draggable={false} className=' hover:cursor-pointer w-[50px] h-[50px] my-auto ' onClick={() => { setFocused({ ...Focused, q3: val }); setAnswer({ ...Answer, Innovation: val }) }} src={unchecked} />))}<h1 className=' text-gray text-xl font-semibold font-noto my-auto'>Agree</h1></div>
                    </div>

                    <div className=' w-full h-fit mb-48'>
                        <h1 className='text-2xl text-center text-gray font-noto font-semibold'>هل تعتبر نفسك شخصًا مبدعًا يحب التعبير عن أفكاره باستخدام الفن أو الألوان؟</h1>
                        <div className=' mt-8 mx-auto w-6/12 h-[80px] border-[0.5px] border-dark rounded-[40px] flex justify-around'><h1 className=' text-gray text-xl font-semibold font-noto my-auto'>Disagree</h1>{AnsValues.map((val) => (Focused.q4 == val ? <Image key={"b" + val} alt='' draggable={false} className=' hover:cursor-pointer w-[50px] h-[50px] my-auto ' src={checked} /> : <Image key={"d" + val} alt='' draggable={false} className=' hover:cursor-pointer w-[50px] h-[50px] my-auto ' onClick={() => { setFocused({ ...Focused, q4: val }); setAnswer({ ...Answer, ProblemSolving: val }) }} src={unchecked} />))}<h1 className=' text-gray text-xl font-semibold font-noto my-auto'>Agree</h1></div>
                    </div>

                    <div className=' w-full h-fit mb-48'>
                        <h1 className='text-2xl text-center text-gray font-noto font-semibold'>هل أنت شخص مؤهل لتحديات العلم والتكنولوجيا المتقدمة؟</h1>
                        <div className=' mt-8 mx-auto w-6/12 h-[80px] border-[0.5px] border-dark rounded-[40px] flex justify-around'><h1 className=' text-gray text-xl font-semibold font-noto my-auto'>Disagree</h1>{AnsValues.map((val) => (Focused.q5 == val ? <Image key={"b" + val} alt='' draggable={false} className=' hover:cursor-pointer w-[50px] h-[50px] my-auto ' src={checked} /> : <Image key={"e" + val} alt='' draggable={false} className=' hover:cursor-pointer w-[50px] h-[50px] my-auto ' onClick={() => { setFocused({ ...Focused, q5: val }); setAnswer({ ...Answer, Teamwork: val }) }} src={unchecked} />))}<h1 className=' text-gray text-xl font-semibold font-noto my-auto'>Agree</h1></div>
                    </div>
                </div>
                <div className=' flex justify-center w-full h-fit pb-16'>
                    <button onClick={(e) => handleSubmit(e, Answer)} className=' focus:outline-none w-40 h-12 bg-transparent text-ruya font-noto font-semibold text-2xl border-ruya border-2 rounded-[40px] mx-auto'>Submit</button>
                </div>
            </div>
        )
    }
    return (
        <div className={`scroll-smooth `}>

            <div className={` w-full h-fit`}>
                <Image src={Know} alt="" className=' object-cover w-full h-full' />
            </div>
            <div className={` w-10/12 h-fit mx-auto py-10`}>
                <h1 className=' text-3xl text-ruya font-noto font-bold'>تفاصيل الاختبار</h1>
                <p className=' mt-2 text-[23px] text-gray font-noto font-regular'>أجب عن مجموعة بسيطة من الأسئلة بحذر مع وضع الهدف في الاعتبار للتأمل في سلوكياتك واتجاهاتك التي تؤثر على الاختيارات التي تتخذها عند حضور موضوع مهم للغاية مثل اختيار ما ستفعله معظم حياتك لمعرفة أفضل تخصص للدراسة، اختر لكل سؤال من اليسار إلى اليمين، من الأقل إلى الأكثر اتفاقًا</p>
                <hr className=' w-[90%] h-[2px] bg-gray mx-auto mt-10' />
            </div>
            <div className={`  w-[60%] h-full mx-auto`}>

            <div className=' w-full h-fit mb-48'>
                        <h1 className='text-2xl text-center text-gray font-noto font-semibold'>هل تعتبر نفسك شخصًا منطقيًا يحب التفكير التحليلي وحل المشكلات المعقدة؟</h1>
                        <div className=' mt-8 mx-auto w-6/12 h-[80px] border-[0.5px] border-dark rounded-[40px] flex justify-around'><h1 className=' text-gray text-xl font-semibold font-noto my-auto'>Disagree</h1>{AnsValues.map((val) => (Focused.q1 == val ? <Image key={"a" + val} alt='' draggable={false} className=' hover:cursor-pointer w-[50px] h-[50px] my-auto ' src={checked} /> : <Image key={"a" + val} alt='' draggable={false} className=' hover:cursor-pointer w-[50px] h-[50px] my-auto ' onClick={() => { setFocused({ ...Focused, q1: val }); setAnswer({ ...Answer, AnalyticalThinking: val }) }} src={unchecked} />))}<h1 className=' text-gray text-xl font-semibold font-noto my-auto'>Agree</h1></div>
                    </div>
                    <div className=' w-full h-fit mb-48'>
                        <h1 className='text-2xl text-center text-gray font-noto font-semibold'>هل تستمتع بالعمل مع الفريق؟</h1>
                        <div className=' mt-8 mx-auto w-6/12 h-[80px] border-[0.5px] border-dark rounded-[40px] flex justify-around'><h1 className=' text-gray text-xl font-semibold font-noto my-auto'>Disagree</h1>{AnsValues.map((val) => (Focused.q2 == val ? <Image key={"b" + val} alt='' draggable={false} className=' hover:cursor-pointer w-[50px] h-[50px] my-auto ' src={checked} /> : <Image key={"b" + val} alt='' draggable={false} className=' hover:cursor-pointer w-[50px] h-[50px] my-auto ' onClick={() => { setFocused({ ...Focused, q2: val }); setAnswer({ ...Answer, Creativity: val }) }} src={unchecked} />))}<h1 className=' text-gray text-xl font-semibold font-noto my-auto'>Agree</h1></div>
                    </div>

                    <div className=' w-full h-fit mb-48'>
                        <h1 className='text-2xl text-center text-gray font-noto font-semibold'>هل تستطيع العمل في بيئة تركز على الدقة والانضباط؟</h1>
                        <div className=' mt-8 mx-auto w-6/12 h-[80px] border-[0.5px] border-dark rounded-[40px] flex justify-around'><h1 className=' text-gray text-xl font-semibold font-noto my-auto'>Disagree</h1>{AnsValues.map((val) => (Focused.q3 == val ? <Image key={"b" + val} alt='' draggable={false} className=' hover:cursor-pointer w-[50px] h-[50px] my-auto ' src={checked} /> : <Image key={"c" + val} alt='' draggable={false} className=' hover:cursor-pointer w-[50px] h-[50px] my-auto ' onClick={() => { setFocused({ ...Focused, q3: val }); setAnswer({ ...Answer, Innovation: val }) }} src={unchecked} />))}<h1 className=' text-gray text-xl font-semibold font-noto my-auto'>Agree</h1></div>
                    </div>

                    <div className=' w-full h-fit mb-48'>
                        <h1 className='text-2xl text-center text-gray font-noto font-semibold'>هل تعتبر نفسك شخصًا مبدعًا يحب التعبير عن أفكاره باستخدام الفن أو الألوان؟</h1>
                        <div className=' mt-8 mx-auto w-6/12 h-[80px] border-[0.5px] border-dark rounded-[40px] flex justify-around'><h1 className=' text-gray text-xl font-semibold font-noto my-auto'>Disagree</h1>{AnsValues.map((val) => (Focused.q4 == val ? <Image key={"b" + val} alt='' draggable={false} className=' hover:cursor-pointer w-[50px] h-[50px] my-auto ' src={checked} /> : <Image key={"d" + val} alt='' draggable={false} className=' hover:cursor-pointer w-[50px] h-[50px] my-auto ' onClick={() => { setFocused({ ...Focused, q4: val }); setAnswer({ ...Answer, ProblemSolving: val }) }} src={unchecked} />))}<h1 className=' text-gray text-xl font-semibold font-noto my-auto'>Agree</h1></div>
                    </div>

                    <div className=' w-full h-fit mb-48'>
                        <h1 className='text-2xl text-center text-gray font-noto font-semibold'>هل أنت شخص مؤهل لتحديات العلم والتكنولوجيا المتقدمة؟</h1>
                        <div className=' mt-8 mx-auto w-6/12 h-[80px] border-[0.5px] border-dark rounded-[40px] flex justify-around'><h1 className=' text-gray text-xl font-semibold font-noto my-auto'>Disagree</h1>{AnsValues.map((val) => (Focused.q5 == val ? <Image key={"b" + val} alt='' draggable={false} className=' hover:cursor-pointer w-[50px] h-[50px] my-auto ' src={checked} /> : <Image key={"e" + val} alt='' draggable={false} className=' hover:cursor-pointer w-[50px] h-[50px] my-auto ' onClick={() => { setFocused({ ...Focused, q5: val }); setAnswer({ ...Answer, Teamwork: val }) }} src={unchecked} />))}<h1 className=' text-gray text-xl font-semibold font-noto my-auto'>Agree</h1></div>
                    </div>
            </div>
            <div className=' flex justify-center w-full h-fit pb-16'>
                <button onClick={(e) => handleSubmit(e, Answer)} className=' focus:outline-none w-40 h-12 bg-transparent text-ruya font-noto font-semibold text-2xl border-ruya border-2 rounded-[40px] mx-auto'>ارسال</button>
            </div>
        </div>
    )
}

export default page