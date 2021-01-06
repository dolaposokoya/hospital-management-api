const statusMessages = {
    SUCCESS_MSG: {
        SUCCESS: {
            status: 200,
            message: 'Success',
            success: true,
            type: 'SUCCESS',
            data: {}
        },
        PATIENT_ASSIGNED: {
            status: 200,
            message: 'Patient assigned to doctor',
            success: true,
            type: 'PATIENT_ASSIGNED'
        },
    },
    ERR_MSG: {
        IMP_ERROR: {
            status: 500,
            success: false,
            message: 'Implementation Error',
            type: 'IMP_ERROR'
        },
        SOMETHING_WENT_WRONG: {
            status: 500,
            success: false,
            message: 'Something went wrong',
            type: 'SOMETHING_WENT_WRONG'
        },
        OP_FAILED: {
            status: 404,
            success: false,
            message: "Unable to perform operation",
            type: "OP_FAILED"
        },
        PWD_NOT_MATCH: {
            status: 404,
            success: false,
            message: "Password do not match",
            type: "PWD_NOT_MATCH"
        },
        UNAUTHORIZATION_ACCESS: {
            status: 401,
            success: false,
            message: "Unauthorized Access",
            type: "UNAUTHORIZATION_ACCESS"
        },
        EMAIL_NOT_MATCH: {
            status: 404,
            success: false,
            message: "Email do not match",
            type: "EMAIL_NOT_MATCH"
        },
        DATA_NOT_FOUND: {
            status: 404,
            success: false,
            message: "Data Not Found",
            type: "DATA_NOT_FOUND"
        },
        FILE_UPLOAD_ERROR: {
            status: 404,
            success: false,
            message: "Unable to upload file",
            type: "FILE_UPLOAD_ERROR"
        },
    }
}

module.exports = statusMessages