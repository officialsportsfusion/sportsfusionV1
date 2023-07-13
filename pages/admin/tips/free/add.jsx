import * as yup from 'yup'
import { useFormik } from 'formik'
import { Input } from '@components/Input'

export default function Page() {

  return (
    <section className='pt-[64px] md:pt-[88px]'>
      <div className='app-container'>
        <h1 className="text-center text-3xl my-4 gradient-text font-bold">Add Free Tips</h1>
        <Form />
      </div>
    </section>
  );
}

export const Form = ({ update, init }) => {
  const initialValues = {
    date: update ? init.date : 'hiuohi',
    time: '',
    league: '',
    match: '',
    odds: '',
    tip: '',
    score: ''
  }
  console.log(initialValues)

  const schema = yup.object().shape({
    date: yup.string().required(),
    time: yup.string().required(),
    league: yup.string().required(),
    match: yup.string().required(),
    odds: yup.string().required(),
    tip: yup.string().required(),
    score: yup.string().required(),
  })

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: async (values, { resetForm }) => {
      if (!!update) {
        return console.log('update')
      } else {
        try {
          const res = await fetch('https://teal-worried-adder.cyclic.app/v1/freetip', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...values })
          })
          // const data = await res.json()
          console.log(res)
          if (res.ok) {
            resetForm()
          }

        } catch (error) {
          console.error(error)
        }
      }
    }
  })

  return (
    <form className='text-app-black' onSubmit={formik.handleSubmit}>
      <div className='sm:grid sm:grid-cols-2 sm:gap-x-6'>
        <div className='relative'>
          <Input placeholder='Date' type='text' name='date' {...formik.getFieldProps('date')} />
          {formik.touched.date && formik.errors.date && <p className='text-red-400 absolute bottom-2'>{formik.errors.date}</p>}
        </div>
        <div className='relative'>
          <Input placeholder='Time' type='text' name='time' {...formik.getFieldProps('time')} />
          {formik.touched.time && formik.errors.time && <p className='text-red-400 absolute bottom-2'>{formik.errors.time}</p>}
        </div>
        <div className='relative'>
          <Input placeholder='League' type='text' name='league' {...formik.getFieldProps('league')} />
          {formik.touched.league && formik.errors.league && <p className='text-red-400 absolute bottom-2'>{formik.errors.league}</p>}
        </div>
        <div className='relative'>
          <Input placeholder='Match' type='text' name='match' {...formik.getFieldProps('match')} />
          {formik.touched.match && formik.errors.match && <p className='text-red-400 absolute bottom-2'>{formik.errors.match}</p>}
        </div>
        <div className='relative'>
          <Input placeholder='Odds' type='text' name='odds' {...formik.getFieldProps('odds')} />
          {formik.touched.odds && formik.errors.odds && <p className='text-red-400 absolute bottom-2'>{formik.errors.odds}</p>}
        </div>
        <div className='relative'>
          <Input placeholder='Tip' type='text' name='tip' {...formik.getFieldProps('tip')} />
          {formik.touched.tip && formik.errors.tip && <p className='text-red-400 absolute bottom-2'>{formik.errors.tip}</p>}
        </div>
        <div className='relative'>
          <Input placeholder='Outcome' type='text' name='score' {...formik.getFieldProps('score')} />
          {formik.touched.score && formik.errors.score && <p className='text-red-400 absolute bottom-2'>{formik.errors.score}</p>}
        </div>
        <button type='submit' className='app-border-gradient-rounded-md h-[2.25rem] w-full cursor-pointer hover:p-[2px] text-white'>
          <span className='inline-grid place-items-center'>{!!update ? 'Update' : 'Add'} Tip</span>
        </button>
      </div>


    </form>
  )
}