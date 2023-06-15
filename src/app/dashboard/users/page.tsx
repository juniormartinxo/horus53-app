export default function Users() {
  return (
    <div className='flex flex-col flex-grow bg-white shadow-sm'>
      <div className='mb-5 border-b border-gray-300 p-4'>
        <h1 className='text-xl font-semibold'>Usuários</h1>
      </div>

      <div className='p-4'>
        <table className='table table-zebra'>
          <thead>
            <tr className='bg-slate-700 text-white text-base'>
              <th>Nome</th>
              <th>E-mail</th>
              <th className='text-center'>Telefone</th>
              <th className='text-center'>Ativo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alexandre de Paiva</td>
              <td>alexandre@horus53.app.br</td>
              <td className='text-center'>(34) 9123-4567</td>
              <td className='text-center'>Ativo</td>
            </tr>
            <tr>
              <td>José Raimuno</td>
              <td>joseraimundo@horus53.app.br</td>
              <td className='text-center'>(34) 9123-4568</td>
              <td className='text-center'>Ativo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
