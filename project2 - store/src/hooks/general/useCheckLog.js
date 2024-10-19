import { useEffect, useState } from "react"

export default function useCheckLog() {

    const [log, setLog] = useState()

    useEffect(() => {
        // localStorage.setItem("logIdUser", true)
        const prom = new Promise((res) => res(localStorage.getItem("logIdUser")))
        prom
            .then(res => setLog(res))
            .catch(() => setLog(false))
    }, [])


    return [log]
}

// Console.Write("Введите количество элементов одномерного массива: ");
// int n = int.Parse(Console.ReadLine());
// int[] inputArray = new int[n];

// for (int i = 0; i < n; i++)
// {
//     Console.Write($"Введите число {i + 1}: ");
//     inputArray[i] = int.Parse(Console.ReadLine());
// }

// int[] evenArray = new int[n];
// int evenCount = 0;

// for (int i = 0; i < n; i++)
// {
//     if (inputArray[i] % 2 == 0)
//     {
//         evenArray[evenCount] = inputArray[i];
//         evenCount++;
//     }
// }

// for (int i = 0; i < evenCount - 1; i++)
// {
//     for (int j = 0; j < evenCount - 1 - i; j++)
//     {
//         if (evenArray[j] > evenArray[j + 1])
//         {
//             int temp = evenArray[j];
//             evenArray[j] = evenArray[j + 1];
//             evenArray[j + 1] = temp;
//         }
//     }
// }
// Console.WriteLine("Отсортированный массив из чётных чисел:");
// for (int i = 0; i < evenCount; i++) Console.WriteLine(evenArray[i]);