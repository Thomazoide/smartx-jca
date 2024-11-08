export interface defaultPayload<T>{
    data?: T
    message?: string
    success: boolean
}

export interface searchEntityByAttributeRequest<T>{
    key: T
}

export interface crudEntityRequest<T>{
    entity: Partial<T>
}