import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import axios from 'axios';

function CreateQuestion() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {

    if(data.answers['answer0'] == data.correctAnswer || data.answers['answer1'] == data.correctAnswer || data.answers['answer2'] == data.correctAnswer || data.answers['answer3'] == data.correctAnswer ){
      const res = await axios.post('http://127.0.0.1:8000/api/questions', data, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      });
      window.alert("La question a été enregistrée !");
      document.getElementById("form").reset();
    }else{
      window.alert("La bonne réponse ne fait pas partie des propositions")
      console.log(data.answers[3])
      console.log(data.correctAnswer)
    }
  };

  return (
    <>
      <div className="page-creation">
        <NavLink style={{ textDecoration: "none" }} component={Button} to="/">
          <Button className="button-home-question">Home</Button>
        </NavLink>

        <form id="form" className="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("title", { required: true })}
            placeholder="Titre"
          />
          {errors.title && <span>Veuillez remplir ce champ</span>}

          <input
            {...register("answers[answer0]", { required: true })}
            placeholder="Proposition 1"
          />
          {errors.answers && <span>Veuillez remplir ce champ</span>}

          <input
            {...register("answers[answer1]", { required: true })}
            placeholder="Proposition 2"
          />
          {errors.answers && <span>Veuillez remplir ce champ</span>}

          <input
            {...register("answers[answer2]", { required: true })}
            placeholder="Proposition 3"
          />
          {errors.answers && <span>Veuillez remplir ce champ</span>}

          <input
            {...register("answers[answer3]", { required: true })}
            placeholder="Proposition 4"
          />
          {errors.answers && <span>Veuillez remplir ce champ</span>}

          <input
            {...register("correctAnswer", { required: true })}
            placeholder="Réponse"
          />
          {errors.correctAnswer && <span>Veuillez remplir ce champ</span>}

          <input
            {...register("image", { required: true })}
            placeholder="URL de l'image"
          />
          {errors.image && <span>Veuillez remplir ce champ</span>}

          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default CreateQuestion;
