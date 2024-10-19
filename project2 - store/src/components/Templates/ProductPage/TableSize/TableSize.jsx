import React from 'react'
import './TableSize.css'

export default function TableSize() {

    return (
        <div className='table_size'>
            <table className='table_size_table'>
                <thead>
                    <tr>
                        <th>US</th>
                        <th>XS</th>
                        <th>S</th>
                        <th>M</th>
                        <th>L</th>
                        <th>XL</th>
                        <th>XLL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>RUS</td>
                        <td>44-46</td>
                        <td>44-46</td>
                        <td>46-48</td>
                        <td>46-48</td>
                        <td>46-48</td>
                        <td>46-48</td>
                    </tr>
                    <tr>
                        <td>Рост</td>
                        <td>170</td>
                        <td>170</td>
                        <td>176</td>
                        <td>176</td>
                        <td>176</td>
                        <td>176</td>
                    </tr>
                    <tr>
                        <td>Обхват груди</td>
                        <td>80-85</td>
                        <td>80-85</td>
                        <td>85-90</td>
                        <td>85-90</td>
                        <td>85-90</td>
                        <td>85-90</td>
                    </tr>
                    <tr>
                        <td>Обхват бедер</td>
                        <td>95</td>
                        <td>95</td>
                        <td>95</td>
                        <td>95</td>
                        <td>95</td>
                        <td>95</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
