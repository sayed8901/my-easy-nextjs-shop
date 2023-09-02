const createJWT = async (payload) => {
    try {
        const response = await fetch("/api/auth", {
            method: "POST",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(payload)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
};

export default createJWT;