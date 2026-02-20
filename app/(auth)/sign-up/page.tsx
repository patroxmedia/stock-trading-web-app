'use client'
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import InputField from "@/components/forms/InputField";

const SignUp = () => {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors,isSubmitting },
    } = useForm<SignUpFormData>({
        defaultValues:{
            fullName:'',
            email:"",
            password:'',
            country:'US',
            investmentGoals:'Growth',
            riskTolerance:'medium',
            preferredIndustry:'Technology'
        },
        mode:'onBlur'

    },);
    const onSubmit= async (data:SignUpFormData) =>
    {
        try {
            console.log(data);

        }catch (e){
            console.log(e);
        }
    }



    return (
        <>

        <h1 className="form-title">Sign Up & Personalize </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                <InputField
                name="fullname"
                label="Full Name"
                placeholder="Full Name"
                register={register}
                error={errors.fullName}
                validation={{ required: 'Full name is required', minLength: 2 }}


                />
                <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5" >

                    {isSubmitting ? 'Create account' : 'Start Your Investing Journey'}
                </Button>


            </form>

        </>
    )
}

export default SignUp