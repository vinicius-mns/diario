export const httpsStatus = {
  // Respostas informativas
  continue: 100,
  switchingProtocols: 101,
  processing: 102,
  earlyHints: 103,

  // Respostas de sucesso
  ok: 200,
  created: 201,
  accepted: 202,
  nonAuthoritativeInformation: 203,
  noContent: 204,
  resetContent: 205,
  partialContent: 206,
  multiStatus: 207,

  // Redirecionamentos
  multipleChoices: 300,
  movedPermanently: 301,
  found: 302,
  seeOther: 303,
  notModified: 304,
  
  // Erros do cliente
  badRequest: 400,
  unauthorized: 401,
  paymentRequired:402,
  forbidden:403,
  
  // Erros do servidor
  internalServerError:500
}
