import "./styles/boardwriteform.scss";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IForm {
	title: string;
	content: string;
	id: string;
	pw: number;
}

function BoardWriteForm() {
	const onValid: SubmitHandler<IForm> = (data: IForm) => {
		console.log(data);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<IForm>();

	return (
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		<form onSubmit={handleSubmit(onValid)} className="BoardWriteForm-form">
			<div className="BoardWriteForm-submit">
				<input type="submit" value="Post your question"></input>
			</div>
			<div className="BoardWriteForm-title">
				<span>* title</span>
				<textarea {...register("title")} />
			</div>
			<div className="BoardWriteForm-content">
				<span>* content</span>
				<textarea {...register("content")} />
			</div>
			<div className="BoardWriteForm-info">
				<div>
					<div className="BoardWriteForm-idpw">
						<span>* id</span>
					</div>
					<textarea {...register("id")} />
				</div>
				<div>
					<div className="BoardWriteForm-idpw">
						<span>* pw </span>
					</div>
					<textarea {...register("pw")} />
				</div>
			</div>
		</form>
	);
}

export default BoardWriteForm;
