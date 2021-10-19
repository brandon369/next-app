import {useRouter} from "next/router";
import Layout from "../../components/layout";

const UserProfile = ({user}) => {

  console.log('Page props')
  console.log(user)
  console.log('Page props')

  const router = useRouter()
  const {id} = router.query

  return (
    <Layout title={user.first_name}>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-header text-center'>
              <img src={user.avatar} alt={user.last_name} style={{borderRadius: '50%'}}/>
            </div>
            <div className='card-body text-center'>
              <h3> {user.id} - {user.first_name} {user.last_name}</h3>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default UserProfile


// pages/blog/[slug].js
export async function getStaticPaths() {

  const res = await fetch(`https://reqres.in/api/users/`)
  const data = await res.json()

  const paths = data.data.map((user) => ({
    params: {id: user.id.toString()},
  }))


  return {
    paths,
    fallback: false
  }
  //
  // return {
  //   paths: [
  //     // String variant:
  //     // '/users/23',
  //     // Object variant:
  //     {params: {id: '23'}},
  //   ],
  //   fallback: true,
  // }
}


export async function getStaticProps(params) {

  const {id} = params.params

  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  console.log('user data')
  console.log(data)
  console.log('user data')
  // console.log(context)
  // console.log(data)


  return {
    props: {
      user: data.data
    }, // will be passed to the page component as props
  }
}
