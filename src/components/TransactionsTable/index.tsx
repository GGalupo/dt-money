import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Type</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Website Development</td>
                        <td className="income">$3,000</td>
                        <td>Development</td>
                        <td>03-02-2021</td>
                    </tr>
                    <tr>
                        <td>Course</td>
                        <td className="expense">-$300</td>
                        <td>Knowledge</td>
                        <td>03-06-2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}