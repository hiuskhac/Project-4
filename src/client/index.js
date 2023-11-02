import { checkForName } from './js/inputChecker'
import { checkRegex } from './js/inputChecker'
import { handleSubmit } from './js/formHandler'
import { fetchData } from './js/formHandler'
import { fillData } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'



document.addEventListener("DOMContentLoaded", function () {
    Client.fetchData()
  });
export {
    checkForName,
    handleSubmit,
    fetchData,
    fillData,
    checkRegex
}