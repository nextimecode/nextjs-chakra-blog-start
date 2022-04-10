const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

export default function formatDate(date) {
  date = new Date(date)

  return (
    date.getDate() + ' de ' +
    months[date.getMonth() + 1] + ' de ' +
    date.getFullYear()
  )
}
