import React from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input } from "@material-ui/core";
import { Input as AntdInput } from "antd";
import "./Css/Review.css";

const Review = () => {


    const onSubmit = data => console.log(data);

    const { control, register, handleSubmit, watch, 
        formState: { errors } } = useForm();

  console.log(watch("example"));


    return ( <div>
 <br></br><br></br> <br></br><br></br>
        <div>
      <span  className="sub-title">Review 
     리뷰남기기 </span> </div>
     <br></br><br></br>
     <br></br><br></br>
    
     <div className="review-box">
     <form onSubmit={handleSubmit(onSubmit)}>
      <label>이름</label>
      <Controller
        render={({ field }) => <Input {...field} />}
        name="firstName"
        control={control}
        defaultValue=""
        className="materialUIInput"
      />
      <br></br>    <br></br><br></br>    <br></br><br></br>
      <label>Ice Cream Preference </label>   
      <Controller
        name="iceCreamType"
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "chocolate", label: "Chocolate" },
              { value: "strawberry", label: "Strawberry" },
              { value: "vanilla", label: "Vanilla" }
            ]}
          />
        )}
        control={control}
        defaultValue=""
      /> <br></br><br></br>    <br></br><br></br>
      <Controller
        name="Checkbox"
        className="R_Checkbox"
        control={control}
        render={({ field }) => <Checkbox {...field} />}
      />

      <input type="submit" />
    </form>


</div>

    </div> );
}
 
export default Review;

