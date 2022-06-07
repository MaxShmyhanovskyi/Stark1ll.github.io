import { Input } from "./Input/Input";
import { useForm } from "react-hook-form";


export function renderFormInputs(formName,register,errors) {
    return Object.values(formName).map((field,index) => {
    
        return (
            <Input register={register} key={index} errors={errors} {
                    ...field
                }
            />
            )
        },
    );
}