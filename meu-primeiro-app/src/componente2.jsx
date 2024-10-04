function Componente2({hb1, hb2, hb3}){
    return(
        <table class="table bg-dark text-white">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Hobbies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{hb1}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>{hb2}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>{hb3}</td>
          </tr>
        </tbody>
      </table>

    )
}
export default Componente2;