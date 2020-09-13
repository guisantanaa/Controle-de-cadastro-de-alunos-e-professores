module.exports = {
    age: function(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || 
            month ==  0 &&
            today.getDate() <= birthDate.getDate()) {
                age = age - 1
            }

            return age 
    },
    date: function(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()

        const month = `0${date.getUTCMonth() + 1}`.slice(-2)

        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`
        }
    },
    graduation: function(value) {
        const graduation = select(value);

        switch (graduation) {
            case "Medio":           
                return "Ensino Médio Completo";

            case "Superior":
                return "Ensino Superior Completo";
            
            case "Mestrado":
                return  "Mestrado";

            case "Doutorado":
                return "Doutorado";

            }

        },
        grade: function(value) {
            const grade = select(value);

            switch(grade) {
                case "5º Ano ensino fundamenal":
                    return "5º Ano";

                case "6º Ano ensino fundamenal":
                    return "6º Ano";

                case "7º Ano ensino fundamenal":
                    return "7º Ano";

                case "8º Ano ensino fundamenal":
                    return "8º Ano";

                case "9º Ano ensino fundamenal":
                    return "9º Ano";

                case "1º Ano ensino médio":
                return "1º Ano";

                case "2º Ano ensino médio":
                return "2º Ano";

                case "3º Ano ensino médio":
                return "3º Ano";
            }
        }
    }
    
    

