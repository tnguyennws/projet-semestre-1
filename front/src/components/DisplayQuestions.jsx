import { useForm } from "react-hook-form";

export function DisplayQuestion({ data }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <div className='quiz-sheet'>

      {data?.map((i, idx) => (
        <div key={idx}>
          <h3>{i.title}</h3>
          <ul>
            <form>
              <li>
                <label class="label"> 
                  <input type="checkbox" value={i.answers[0]}/> {i.answers[0]} 
                </label>
              </li>
              <li>
                <label class="label"> 
                  <input type="checkbox" value={i.answers[1]}/> {i.answers[1]} 
                </label>
              </li>
              <li>
                <label class="label"> 
                  <input type="checkbox" value={i.answers[2]}/> {i.answers[2]} 
                </label>
              </li>
              <li>
                <label class="label"> 
                  <input type="checkbox" value={i.answers[3]}/> {i.answers[3]} 
                </label>
              </li>
              <li>
                <button type="submit">Valider la réponse</button>
              </li>
            </form>
          </ul>
          {/* <img src={i.image} alt="quizz" width="300" /> */}

        </div>
      ))}
    </div>
  );
}
