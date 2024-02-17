import * as S from './styles'; 

export function TransactionsTable() {
	return (
		<S.Container>
			<table>
				<thead>
					<tr>
					<th>Titulo</th>	
					<th>Valor</th>	
					<th>Categoria</th>	
					<th>Data</th>	
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>Teste</td>
						<td className='deposito'>R$ 1000,00</td>
						<td>Salario</td>
						<td>17/02/2024</td>
					</tr>
					<tr>
						<td>Teste</td>
						<td className='retirada'>- R$ 500,00</td>
						<td>Aluguel</td>
						<td>17/02/2024</td>
					</tr>
				</tbody>
			</table>
		</S.Container>
	);
};