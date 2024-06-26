export const TemplateBase = ({children}: Html.PropsWithChildren) => {
  return (
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/public/globals.css" />
        <script src="https://unpkg.com/htmx.org@1.9.12" integrity="sha384-ujb1lZYygJmzgSwoxRggbCHcjc0rB2XoQrxeTUQyRjrOnlCoYta87iKBWq3EsdM2" crossorigin="anonymous"></script>
        <title>PerkakaksKu - Histori alat-alat yang OK!</title>
    </head>
    <body>
    {children}
    </body>
</html>
  );
};
