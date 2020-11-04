 function deleteThat()
                {
                    return confirm("Bы уверены, что хотите удалить это?\n(Ну, удалено оно не будет)");
                }
        function sucsessbutno() {
            alert("Ну, допустим, успешно, да.");
        }
        function ucant() {
            alert("Ась? В смысле? Это тут работать не будет, это для лабы по ооп было...");
        }

        function bulba1(keck) //Задание 1.1
        {
            return keck;
        }
        function bulba2(keck1, keck2)//Задание 1.2
        {
            return keck1+keck2;
        }
        function bulba3()//Задание 1.3
        {
            let keck = ["sadsad", 123, -1233, 'a', 2134, 0, 14, 5, serd, 10, "asd"];
            for (let i = 0; i < keck.length; i++) {
                if (isNaN(keck[i]))
                    keck[i] = 0;
                else
                    keck[i] *= keck[i];
            }
        }