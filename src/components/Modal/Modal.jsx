import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const successModal = ({ result, routeTo }) => {
  console.log(result)
    MySwal.fire({
      icon: 'success',
      title: `${result.value} has been saved`,
      text: 'You can check it on my Pokemon List'
    }).then((result) => {
      if (result.isConfirmed) routeTo()
    })
}

export const failedModal = (nickname = '') => {
  MySwal.fire({
    icon: 'error',
    title: 'Oops...',
    text: nickname ? `${nickname} already exist!` : 'It runs away!'
  })
}

export const successDeleteModal = ({ nickname, fn}) => {
  MySwal.fire({
    icon: 'success',
    title: `${nickname} has been deleted`,
    text: 'You can catch it again anytime'
  }).then((result) => {
    fn(result)
  })
}
