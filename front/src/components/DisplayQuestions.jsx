import { useForm } from "react-hook-form";

export function DisplayQuestion({ data }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <div>
      {data?.map((i, idx) => (
        <div key={idx}>
          <h3>{i.title}</h3>
          <ul>
            <li>{i.answers[0]}</li>
            <li>{i.answers[1]}</li>
            <li>{i.answers[2]}</li>
            <li>{i.answers[3]}</li>
          </ul>
          <p>{i.correctAnswer}</p>
          <img src={i.image} alt="quizz" width="300" />
        </div>
      ))}

      <form id="form" className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("envoi", { required: true })}
          placeholder="Réponse"
        />
        {errors.envoi && <span>Veuillez remplir ce champ</span>}

        <input type="submit" />
      </form>
    </div>
  );
}
