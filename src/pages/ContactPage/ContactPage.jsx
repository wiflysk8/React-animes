import React from "react";
import { useForm } from "react-hook-form";
import FormError from "../../components/FormError";
import "./ContactPage.css";

const ContactPage = () => {
  const { register, handleSubmit, watch, formState: { errors }} = useForm();
  const submit = (data) => {      
    console.log(data);
  };
  console.log(watch('name'));
  console.log(errors);
  return (
    <div className="c-contact">
      <form onSubmit={handleSubmit(submit)}>
        <div className="c-form__input">
          <label>
          <p>Name</p>
            <input type="text" placeholder="Name" {...register("name", { required: true})} />
          </label>
            <FormError error={errors.name} />
        </div>

        <div className="c-form__input">
          <label>
          <p>Surname</p>
            <input type="text" placeholder="Surname" {...register("surname", { required: true})} />
            <FormError error={errors.surname} />
          </label>
        </div>

        <div className="c-form__input">
          <label>
          <p>Gender</p>
            <select name="gender"  {...register("gender")}>
              <option value="">Select gender</option>
              <option value="hombre">Male</option>
              <option value="mujer">Female</option>
            </select>
          </label>
        </div>

        <div className="c-form__input">
          <label>
            <p>Description</p>
            <textarea name="description" cols="30" rows="3"  {...register("description")} placeholder="Description"></textarea>
          </label>
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default ContactPage;
