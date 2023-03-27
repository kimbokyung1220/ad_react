import { warningAlert } from "../page/alerts/alert";

export const validation = () => {
    const checkInputSpecial = (str: string) => {
        const specialRegExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;
        // const specialRegExp = /[!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]/g;
        if (specialRegExp.test(str)) {
            return true;       
        }
        else {
            console.log("f");
            return false;
        }
    }

    const checkInputNumber = (param: any) => {
        const numberRegExp = /[0-9]/g;
        if(numberRegExp.test(param)) {
            param.replace(numberRegExp, "")
            return true;
        } else {
            return false;
        }
    }

    const handlers = { checkInputSpecial, checkInputNumber };

    return {
        ...handlers
    }

}

