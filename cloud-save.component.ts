import { Component } from '@angular/core';

@Component({
  selector: 'app-cloud-save',
  templateUrl: './cloud-save.component.html',
  styleUrl: './cloud-save.component.css'
})
export class CloudSaveComponent { 
public void SaveToGoogleCloud(IFormCollection data)
{
   if (data.Files.Count == 0)
    return;

  IFormFile file = data.Files[0];
  string documentName = this.GetValue(data, "documentName");
  string result = Path.GetFileNameWithoutExtension(documentName);

  string bucketName = _bucketName;

  Stream stream = new MemoryStream();
  file.CopyTo(stream);

  _storageClient.UploadObject(bucketName, result + "_downloaded.docx", null, stream);

}   

private string GetValue(IFormCollection data, string key)
{
    if (data.ContainsKey(key))
    {
        string[] values = data[key];
        if (values.Length > 0)
        {
            return values[0];
        }
    }
    return "";
}
}
