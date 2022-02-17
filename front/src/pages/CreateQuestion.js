import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import React, { useRef, useState } from "react"; 
import ReactPlayer from "react-player";

function CreateQuestion() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [videoFilePath, setVideoFilePath] = useState('');
  const [imageUrl, setImageUrl] = useState('')

  const onSubmit = async (data) => {
    data.image = imageUrl;
    if(data.answers['answer0'] === data.correctAnswer || data.answers['answer1'] === data.correctAnswer || data.answers['answer2'] === data.correctAnswer || data.answers['answer3'] === data.correctAnswer ){
      
      await axios.post('http://127.0.0.1:8000/api/questions', data, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      });

      window.alert("La question a été enregistrée !");
      document.getElementById("form").reset();
    }else{
      window.alert("La bonne réponse ne fait pas partie des propositions")
    }
  };

  const videoCreateRef = useRef(null)

  const onFocus = async () => {
    return await axios.get(`https://api.trace.moe/search?url=${encodeURIComponent(imageUrl)}`)
      .then(v => {
        setVideoFilePath(v.data.result[0].video)
        videoCreateRef.current.classList.add('create-wrapper-js')
      });
  }


  return (
    <div className="page-creation">
      <div className="breadcrumb">
        <NavLink style={{ textDecoration: "none" }} component={Button} to="/">
          <Button className="button-home-question">Home</Button>
        </NavLink>
      </div>

      <div className="create-wrapper">

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
            placeholder="URL de l'image"
            onChange={(e) => setImageUrl(e.target.value)} onBlur={onFocus}
          />

          <input type="submit" />
        </form>

       <div className="react-video-create" ref={videoCreateRef}>
        <ReactPlayer url={videoFilePath} playing={true} muted={true} loop={true} controls={true} width={350} height={350} />
       </div>

      </div>
    </div>
  );
}

export default CreateQuestion;
